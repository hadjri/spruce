import { StoryObj } from "@storybook/react";
import FilterBadges, {
  useFilterBadgeQueryParams,
} from "components/FilterBadges";
import { size } from "constants/tokens";
import { TestStatus } from "types/history";
import { HistoryTableTestSearch } from "./HistoryTableTestSearch";

export default {
  title: "Components/HistoryTable/HistoryTableTestSearch",
  component: HistoryTableTestSearch,
};

export const Default: StoryObj<typeof HistoryTableTestSearch> = {
  render: () => <TestSearch />,
};

const TestSearch = () => {
  const { badges, handleClearAll, handleOnRemove } = useFilterBadgeQueryParams(
    new Set([TestStatus.Failed, TestStatus.Passed, TestStatus.All])
  );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <HistoryTableTestSearch />
      <div style={{ paddingTop: size.s }}>
        <FilterBadges
          badges={badges}
          onRemove={handleOnRemove}
          onClearAll={handleClearAll}
        />
      </div>
    </div>
  );
};
