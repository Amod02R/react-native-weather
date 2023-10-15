import { TextInput } from "react-native";
import { s } from "./SearchBar.style";

export default function SearchBar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={s.searchbar}
      placeholder="Type city here"
    ></TextInput>
  );
}
