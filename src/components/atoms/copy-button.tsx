import { CopyIcon } from "./icons";
import { TouchableOpacity } from "react-native";

export default function CopyButton(props: any) {
  return (
    <TouchableOpacity onPress={props.onTap}>
      <CopyIcon></CopyIcon>
    </TouchableOpacity>
  );
}
