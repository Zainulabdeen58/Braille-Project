import * as React from "react";
import { toast as toastify } from "react-toastify";

export function useToast() {
  const toast = React.useCallback(
    ({ title, description, variant = "default", ...props }) => {
      const message = description ? `${title}: ${description}` : title;

      if (variant === "destructive") {
        toastify.error(message, props);
      } else if (variant === "success") {
        toastify.success(message, props);
      } else {
        toastify.info(message, props);
      }
    },
    []
  );

  return { toast };
}
