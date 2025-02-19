import { MockedProvider } from "@apollo/client/testing";
import { StoryObj } from "@storybook/react";
import { getCommitsRoute } from "constants/routes";
import {
  AddFavoriteProjectMutation,
  AddFavoriteProjectMutationVariables,
  GetProjectsQuery,
  GetProjectsQueryVariables,
  GetViewableProjectRefsQuery,
  GetViewableProjectRefsQueryVariables,
  RemoveFavoriteProjectMutation,
  RemoveFavoriteProjectMutationVariables,
} from "gql/generated/types";
import { ADD_FAVORITE_PROJECT, REMOVE_FAVORITE_PROJECT } from "gql/mutations";
import { GET_PROJECTS, GET_VIEWABLE_PROJECTS } from "gql/queries";
import WithToastContext from "test_utils/toast-decorator";
import { ApolloMock } from "types/gql";
import { ProjectSelect } from ".";

export default {
  component: ProjectSelect,
  decorators: [
    (Story: () => JSX.Element) => WithToastContext(Story),
    (Story: () => JSX.Element) => (
      <MockedProvider
        mocks={[
          getProjectsMock,
          viewableProjectsMock,
          addFavoriteMock,
          removeFavoriteMock,
        ]}
      >
        <Story />
      </MockedProvider>
    ),
  ],
};

export const Default: StoryObj<typeof ProjectSelect> = {
  render: () => (
    <ProjectSelect
      selectedProjectIdentifier="evergreen"
      getRoute={getCommitsRoute}
    />
  ),
};

export const WithClickableHeader: StoryObj<typeof ProjectSelect> = {
  render: () => (
    <ProjectSelect
      selectedProjectIdentifier="evergreen"
      getRoute={getCommitsRoute}
      isProjectSettingsPage
    />
  ),
};

const addFavoriteMock: ApolloMock<
  AddFavoriteProjectMutation,
  AddFavoriteProjectMutationVariables
> = {
  request: {
    query: ADD_FAVORITE_PROJECT,
    variables: { identifier: "evergreen" },
  },
  result: {
    data: {
      addFavoriteProject: {
        id: "evergreen",
        identifier: "evergreen",
        repo: "evergreen",
        owner: "evergreen-ci",
        displayName: "evergreen smoke test",
        isFavorite: true,
      },
    },
  },
};
const removeFavoriteMock: ApolloMock<
  RemoveFavoriteProjectMutation,
  RemoveFavoriteProjectMutationVariables
> = {
  request: {
    query: REMOVE_FAVORITE_PROJECT,
    variables: { identifier: "evergreen" },
  },
  result: {
    data: {
      removeFavoriteProject: {
        id: "evergreen",
        identifier: "evergreen",
        repo: "evergreen",
        owner: "evergreen-ci",
        displayName: "evergreen smoke test",
        isFavorite: false,
      },
    },
  },
};

const getProjectsMock: ApolloMock<GetProjectsQuery, GetProjectsQueryVariables> =
  {
    request: {
      query: GET_PROJECTS,
    },
    result: {
      data: {
        projects: [
          {
            groupDisplayName: "evergreen-ci/evergreen",
            projects: [
              {
                id: "evergreen",
                identifier: "evergreen",
                repo: "evergreen",
                owner: "evergreen-ci",
                displayName: "evergreen smoke test",
                isFavorite: false,
              },
            ],
          },
          {
            groupDisplayName: "logkeeper/logkeeper",
            projects: [
              {
                id: "logkeeper",
                identifier: "logkeeper",
                repo: "logkeeper",
                owner: "logkeeper",
                displayName: "logkeeper",
                isFavorite: false,
              },
            ],
          },
          {
            groupDisplayName: "mongodb/mongo",
            projects: [
              {
                id: "sys-perf",
                identifier: "sys-perf",
                repo: "mongo",
                owner: "mongodb",
                displayName: "System Performance (main)",
                isFavorite: false,
              },
              {
                id: "performance",
                identifier: "performance",
                repo: "mongo",
                owner: "mongodb",
                displayName: "MongoDB Microbenchmarks (main)",
                isFavorite: false,
              },
            ],
          },
          {
            groupDisplayName: "mongodb/mongodb",
            projects: [
              {
                id: "mongodb-mongo-master",
                identifier: "mongodb-mongo-master",
                repo: "mongodb",
                owner: "mongodb",
                displayName: "mongo",
                isFavorite: false,
              },
            ],
          },
          {
            groupDisplayName: "mongodb/mongodb-test",
            projects: [
              {
                id: "mongodb-mongo-test",
                identifier: "mongodb-mongo-test",
                repo: "mongodb-test",
                owner: "mongodb",
                displayName: "mongo-test",
                isFavorite: false,
              },
            ],
          },
        ],
      },
    },
  };

const viewableProjectsMock: ApolloMock<
  GetViewableProjectRefsQuery,
  GetViewableProjectRefsQueryVariables
> = {
  request: {
    query: GET_VIEWABLE_PROJECTS,
  },
  result: {
    data: {
      viewableProjectRefs: [
        {
          groupDisplayName: "evergreen-ci/evergreen",
          projects: [
            {
              id: "evergreen",
              identifier: "evergreen",
              repo: "evergreen",
              owner: "evergreen-ci",
              displayName: "evergreen smoke test",
              isFavorite: false,
            },
          ],
          repo: {
            id: "634d56d3850e610cacfe7e0b",
          },
        },
        {
          groupDisplayName: "mongodb/mongodb-test",
          projects: [
            {
              id: "mongodb-mongo-test",
              identifier: "mongodb-mongo-test",
              repo: "mongodb-test",
              owner: "mongodb",
              displayName: "mongo-test",
              isFavorite: false,
            },
          ],
          repo: {
            id: "6320b3d7850e613ee5b3bf8e",
          },
        },
      ],
    },
  },
};
