// /* eslint-disable no-unused-vars */
// import {
//   Progress,
//   Box,
//   ButtonGroup,
//   Button,
//   Heading,
//   Flex,
//   FormControl,
//   GridItem,
//   FormLabel,
//   Input,
//   Select,
//   SimpleGrid,
//   InputLeftAddon,
//   InputGroup,
//   Textarea,
//   FormHelperText,
//   InputRightElement,
// } from "@chakra-ui/react";
// import { useState } from "react";

// const FormMultiStep = () => {
//   const [show, setShow] = useState(false);
//   const handleClick = () => {
//     setShow(!show);
//   };

//   return (
//     <>
//       <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
//         User Registration
//       </Heading>

//       <Flex>
//         <FormControl mr="5%">
//           <FormLabel htmlFor="first-name" fontWeight={"normal"}>
//             First name
//           </FormLabel>
//           <Input id="first-name" placeholder="First name" />
//         </FormControl>

//         <FormControl>
//           <FormLabel htmlFor="last-name" fontWeight={"normal"}>
//             Last name
//           </FormLabel>
//           <Input id="last-name" placeholder="First name" />
//         </FormControl>
//       </Flex>

//       <FormControl mt="2%">
//         <FormLabel htmlFor="email" fontWeight={"normal"}>
//           Email address
//         </FormLabel>
//         <Input id="email" type="email" />
//         <FormHelperText>Well never share your email.</FormHelperText>
//       </FormControl>

//       <FormControl>
//         <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
//           Password
//         </FormLabel>
//         <InputGroup size="md">
//           <Input
//             pr="4.5rem"
//             type={show ? "text" : "password"}
//             placeholder="Enter password"
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>
//     </>
//   );
// };

// export default FormMultiStep;
