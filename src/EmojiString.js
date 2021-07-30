import React from "react";
import { FormField } from "@sanity/base/components";
import { TextInput, Text, Box } from "@sanity/ui";
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
      let inputValue = event.currentTarget.value;

      if(/[aeiou]/gi.test(inputValue))
      {
        let max = 700;        
        let num = Math.floor(Math.random() * max);
        let emojiCode = String.fromCodePoint("0X1F".concat(num));
        inputValue = inputValue.replace(/[aeiou]/gi, emojiCode);
      }

      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
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
