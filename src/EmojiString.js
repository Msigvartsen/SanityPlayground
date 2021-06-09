import React from "react";
import { FormField } from "@sanity/base/components";
import { TextInput, Flex, Text, Box, Card } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import { useId } from "@reach/auto-id";

const EmojiString = React.forwardRef((props, ref) => {
  const {
    type,
    value,
    readOnly,
    placeholder,
    markers,
    presence,
    compareValue,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const handleChange = React.useCallback(
    (event) => {
      const inputValue = event.currentTarget.value;
      var num = Math.floor(Math.random() * (700 - 600) + 600);
      let emojiCode = String.fromCodePoint("0X1F".concat(num));
      let updatedValue = inputValue.replace(/[aeiou]/gi, emojiCode);
      onChange(PatchEvent.from(inputValue ? set(updatedValue) : unset()));
    },
    [onChange]
  );

  const inputId = useId();

  return (
    <FormField
      description={type.description}
      title={type.title}
      compareValue={compareValue}
      __unstable_markers={markers}
      __unstable_presence={presence}
      inputId={inputId}
    >
      <Box flex={1} paddingY={2}>
        <TextInput
          id={inputId}
          value={value}
          readOnly={readOnly}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
        />
      </Box>
    
      <Text size={1} muted>Most annoying text field ever</Text>
    </FormField>
  );
});

export default EmojiString;
