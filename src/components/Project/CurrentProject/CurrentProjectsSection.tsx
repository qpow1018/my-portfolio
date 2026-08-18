import { Box } from "@mui/material";
import theme from "@/style/theme";

import WeddingbookService from "./WeddingbookService";
import LoamService from "./LoamService";

export default function CurrentProjectsSection(props: { isDesktop: boolean }) {
  const { isDesktop } = props;

  return (
    <Box
      component={"section"}
      sx={[
        {
          paddingBottom: "60px",
        },
        isDesktop === true && {
          paddingBottom: "80px",
        },
      ]}
    >
      <WeddingbookService />
      <Box
        sx={[
          {
            borderTop: `1px solid ${theme.color.text.primary}`,
            marginTop: "56px",
            paddingTop: "40px",
          },
          isDesktop === true && {
            marginTop: "80px",
            paddingTop: "56px",
          },
        ]}
      >
        <LoamService />
      </Box>
    </Box>
  );
}
