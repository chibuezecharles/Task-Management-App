import { createStandaloneToast, ToastPosition } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export const showToast = ({
  title,
  description,
  status,
  duration = 5000,
  isClosable = true,
  position = "top-right",
}: {
  title: string;
  description: string;
  status: "success" | "error" | "warning" | "info";
  duration?: number;
  isClosable?: boolean;
  position?: ToastPosition; 
}) => {
  toast({
    title,
    description,
    status,
    duration,
    isClosable,
    position, 
  });
};
