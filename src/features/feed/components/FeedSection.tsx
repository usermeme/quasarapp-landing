import { type FC } from "react";

import { ParallaxImage } from "@/components/ParallaxImage";
import { RenderTree } from "@/components/RenderTree";
import { SectionCard } from "@/components/SectionCard";

import { Box, Button, Stack, Typography } from "@/ui-kit/components";

import { FeedSectionData } from "../@types";

interface FeedSectionProps extends FeedSectionData {
  flattened?: boolean;
}
export const FeedSection: FC<FeedSectionProps> = ({
  actions,
  dataTree,
  flattened,
  headline,
  id,
  image,
  main,
}) => {
  return (
    <SectionCard
      flattened={flattened}
      header={image && <ParallaxImage alt={headline} image={image} />}
      id={id}
    >
      <Typography component={main ? "h1" : "h2"} variant="h5" sx={{ mb: 2 }}>
        {headline}
      </Typography>

      <Box flex={1}>
        <RenderTree data={dataTree} />
      </Box>

      {actions && (
        <Stack>
          {actions?.map((action) => (
            <Button key={action.href} href={action.href}>
              {action.text}
            </Button>
          ))}
        </Stack>
      )}
    </SectionCard>
  );
};
