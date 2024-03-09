import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  const error = useRouteError()
  return (
    <>
      <Navbar />
      <Box padding={5}>
      <Heading>Ooop</Heading>
      <Text>{isRouteErrorResponse(error) ? "This page does not exist" : "An unexpected error occurd"}</Text>
      </Box>
    </>
  )
}