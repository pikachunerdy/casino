import { Container, Label } from "./Badge.module";

export default function Badge(props) {
  return (
    <Container>
      <Label color={props.color}>{props.label}</Label>
    </Container>
  );
}
