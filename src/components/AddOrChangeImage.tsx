import React, { useState } from "react";
import { setCurrentUser } from "../app/slices/UserSlice";
import { sdk } from "../config/sharetribeSDK.config";
import { Button, Dialog, DialogTitle, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ChangeImage = (props: any) => {
  const [file, setfile] = useState<any>();
  const { flag, setFlag } = props;
  const dispatch = useDispatch();

  const uploadImage = async (file: any) => {
    if (file) {
      try {
        const res = await sdk.images.upload(
          {
            image: file,
          },
          {
            expand: true,
          }
        );
        sdk.currentUser
          .updateProfile(
            {
              profileImageId: res.data.data.id.uuid,
            },
            {
              expand: true,
              include: ["profileImage"],
            }
          )
          .then((res: any) => {
            console.log(res);
            setFlag(false);
            sdk.currentUser
              .show({
                expand: true,
                include: ["profileImage"],
              })
              .then((ress: any) => {
                dispatch(setCurrentUser(ress.data));
              });
          });
      } catch {}
    }
  };
  return (
    <>
      <Dialog open={flag}>
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => setFlag(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 2,
              fontSize: "15px",
            }}
          >
            Back
            <ArrowForwardIcon />
          </IconButton>
        </DialogTitle>
        <input
          id="my-file"
          type="File"
          onChange={(e) => {
            setfile(e.target.files ? e.target.files[0] : null);
          }}
        />

        <Button onClick={() => uploadImage(file)}>save image</Button>
      </Dialog>
    </>
  );
};
