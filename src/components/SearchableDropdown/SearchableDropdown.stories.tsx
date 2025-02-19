import { useState } from "react";
import { StoryObj } from "@storybook/react";
import SearchableDropdown, { SearchableDropdownProps } from ".";

export default {
  component: SearchableDropdown,
};

export const Default: StoryObj<SearchableDropdownProps<string>> = {
  render: (args) => <Dropdown options={["1", "2", "3"]} {...args} />,
  args: {
    allowMultiSelect: false,
    disabled: false,
    label: "Searchable Dropdown",
  },
};

export const CustomOption: StoryObj<
  SearchableDropdownProps<{ label: string; value: string }>
> = {
  render: (args) => (
    <Dropdown
      options={[
        {
          label: "Option 1",
          value: "1",
        },
        {
          label: "Option 2",
          value: "2",
        },
        {
          label: "Option 3",
          value: "3",
        },
      ]}
      optionRenderer={(option, onClick, isChecked) => (
        <button
          onClick={() => onClick(option.value)}
          type="button"
          key={option.value}
        >
          {isChecked(option.value) && `✔️`}
          {option.label}
        </button>
      )}
      allowMultiSelect
      label="Custom option select"
      {...args}
    />
  ),
};

const Dropdown = (props) => {
  const [value, setValue] = useState([]);
  return <SearchableDropdown {...props} value={value} onChange={setValue} />;
};
