import Image from "next/image";
import classes from "./page.module.css";
import { LeadGrid } from "@/components/GridLayouts/LeadGrid";
import { Accordion_t1 } from "@/components/accordion/accordion";
import { Button, Container, Overlay, Group, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <div className={classes.wrapper}>
        <Container size={700} className={classes.inner}>
          <h1 className={classes.title}>
            Embrace the Power
            <br /> of{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
              inherit
            >
              Open-Source
            </Text>{" "}
            and Collaboration
          </h1>

          <Text className={classes.description} color="dimmed">
            Join us on our journey to explore, collaborate, and innovate in the
            world of FOSS!
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
            >
              Join
            </Button>

            <Button
              component="a"
              href="https://github.com/mantinedev/mantine"
              size="xl"
              variant="default"
              className={classes.control}
              leftSection={""}
            >
              GitHub
            </Button>
          </Group>
        </Container>
      </div>

      <LeadGrid />
      <Accordion_t1 />
    </>
  );
}
