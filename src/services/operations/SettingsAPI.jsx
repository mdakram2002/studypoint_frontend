
import { apiConnector } from "../apiConnector";
import { setUser } from "../../slices/profileSlice";
import { settingsEndpoints } from "../apis";
import { logOut } from "./authAPI";

import { toast } from "react-hot-toast";

const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints;

export function updateDisplayPicture(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      console.log("UPDATE_DISPLAY_PICTURE_API API RESPONSE: ", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Display Picture Updated Successfully");
      dispatch(setUser(response.data.data));
    } catch (error) {
      console.log("UPDATE_DISPLAY_PICTURE_API API ERROR: ", error);
      toast.error("Could Not Update Display Picture");
    }
    toast.dismiss(toastId);
  };
}

export function updateProfile(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      });
      console.log("UPDATE_PROFILE_API API RESPONSE: ", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // Use profileDetails instead of updatedUserDetails
      const userImage = response.data.profileDetails.image
        ? response.data.profileDetails.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.profileDetails.firstName} ${response.data.profileDetails.lastName}`;

      dispatch(setUser({ ...response.data.profileDetails, image: userImage }));
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR: ", error);
      toast.error("Could Not Update Profile");
    }
    toast.dismiss(toastId);
  };
}

export async function changePassword(token, formData) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("PUT", CHANGE_PASSWORD_API, formData, {
      Authorization: `Bearer ${token}`,
    });
    console.log("CHANGE_PASSWORD_API API RESPONSE: ", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Password Changed Successfully");
  } catch (error) {
    console.log("CHANGE_PASSWORD_API API ERROR: ", error);
    toast.error(
      "Could not change password, please try again!",
      error.response.data.message
    );
  }
  toast.dismiss(toastId);
}

export function deleteProfile(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
        Authorization: `Bearer ${token}`,
      });
      console.log("DELETE_PROFILE_API API RESPONSE: ", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Profile Deleted Successfully");
      dispatch(logOut(navigate));
    } catch (error) {
      console.log("DELETE_PROFILE_API API ERROR: ", error);
      toast.error("Could Not Delete Profile");
    }
    toast.dismiss(toastId);
  };
}
