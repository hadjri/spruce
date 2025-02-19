import { MockedProvider } from "@apollo/client/testing";
import { StoryObj } from "@storybook/react";
import { TaskDurationTable } from "./TaskDurationTable";

export default {
  title: "Pages/Task/Table/Task Duration Table",
  component: TaskDurationTable,
  decorators: [
    (Story: () => JSX.Element) => (
      <MockedProvider>
        <Story />
      </MockedProvider>
    ),
  ],
};

export const Default: StoryObj<typeof TaskDurationTable> = {
  render: () => <TaskDurationTable tasks={props.tasks} loading={false} />,
};

const props = {
  tasks: [
    {
      id: "evg_ubuntu1604_container_test_rest_data_fd73e06c7bc6c5dcdf7a671dece0153916e64212_23_01_04_16_01_18",
      buildVariantDisplayName: "Ubuntu 16.04 (Container)",
      displayName: "test-rest-data",
      execution: 0,
      executionTasksFull: null,
      startTime: new Date("2023-01-04T16:01:25.242Z"),
      status: "system-failed",
      timeTaken: 4840553,
    },
    {
      id: "evg_ubuntu1604_container_test_model_distro_fd73e06c7bc6c5dcdf7a671dece0153916e64212_23_01_04_16_01_18",
      buildVariantDisplayName: "Ubuntu 16.04 (Container)",
      displayName: "test-model-distro",
      execution: 0,
      executionTasksFull: null,
      startTime: new Date("2023-01-04T16:01:25.295Z"),
      status: "system-failed",
      timeTaken: 4840547,
    },
    {
      id: "evg_ubuntu1604_container_test_agent_internal_fd73e06c7bc6c5dcdf7a671dece0153916e64212_23_01_04_16_01_18",
      buildVariantDisplayName: "Ubuntu 16.04 (Container)",
      displayName: "test-agent-internal",
      execution: 0,
      executionTasksFull: null,
      startTime: new Date("2023-01-04T16:01:25.234Z"),
      status: "system-failed",
      timeTaken: 4840526,
    },
    {
      id: "evg_ubuntu1604_container_test_evergreen_fd73e06c7bc6c5dcdf7a671dece0153916e64212_23_01_04_16_01_18",
      buildVariantDisplayName: "Ubuntu 16.04 (Container)",
      displayName: "test-evergreen",
      execution: 0,
      executionTasksFull: null,
      startTime: new Date("2023-01-04T16:01:25.258Z"),
      status: "system-failed",
      timeTaken: 4840512,
    },
    {
      id: "evg_ubuntu1604_container_test_model_artifact_fd73e06c7bc6c5dcdf7a671dece0153916e64212_23_01_04_16_01_18",
      buildVariantDisplayName: "Ubuntu 16.04 (Container)",
      displayName: "test-model-artifact",
      execution: 0,
      executionTasksFull: null,
      startTime: new Date("2023-01-04T16:01:25.272Z"),
      status: "system-failed",
      timeTaken: 4840399,
    },
    {
      id: "evg_ubuntu1604_container_test_thirdparty_fd73e06c7bc6c5dcdf7a671dece0153916e64212_23_01_04_16_01_18",
      buildVariantDisplayName: "Ubuntu 16.04 (Container)",
      displayName: "test-thirdparty",
      execution: 0,
      executionTasksFull: null,
      startTime: new Date("2023-01-04T16:01:25.259Z"),
      status: "system-failed",
      timeTaken: 4840375,
    },
    {
      id: "evg_ubuntu1604_container_test_model_event_fd73e06c7bc6c5dcdf7a671dece0153916e64212_23_01_04_16_01_18",
      buildVariantDisplayName: "Ubuntu 16.04 (Container)",
      displayName: "test-model-event",
      execution: 0,
      executionTasksFull: null,
      startTime: new Date("2023-01-04T16:01:25.275Z"),
      status: "system-failed",
      timeTaken: 4840347,
    },
    {
      id: "evg_ubuntu1604_container_test_model_testresult_fd73e06c7bc6c5dcdf7a671dece0153916e64212_23_01_04_16_01_18",
      buildVariantDisplayName: "Ubuntu 16.04 (Container)",
      displayName: "test-model-testresult",
      execution: 0,
      executionTasksFull: null,
      startTime: new Date("2023-01-04T16:01:25.291Z"),
      status: "system-failed",
      timeTaken: 4840319,
    },
    {
      id: "evg_ubuntu1604_container_test_model_alertrecord_fd73e06c7bc6c5dcdf7a671dece0153916e64212_23_01_04_16_01_18",
      buildVariantDisplayName: "Ubuntu 16.04 (Container)",
      displayName: "test-model-alertrecord",
      execution: 0,
      executionTasksFull: null,
      startTime: new Date("2023-01-04T16:01:25.268Z"),
      status: "system-failed",
      timeTaken: 4840303,
    },
    {
      id: "evg_ubuntu1604_container_test_model_patch_fd73e06c7bc6c5dcdf7a671dece0153916e64212_23_01_04_16_01_18",
      buildVariantDisplayName: "Ubuntu 16.04 (Container)",
      displayName: "test-model-patch",
      execution: 0,
      executionTasksFull: null,
      startTime: new Date("2023-01-04T16:01:25.281Z"),
      status: "system-failed",
      timeTaken: 4840277,
    },
  ],
  loading: false,
};
