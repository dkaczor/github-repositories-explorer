import React, { FC } from "react";
import { Input } from "semantic-ui-react";
import { ExpandedButton } from "styled";

interface ExplorerHeaderProps {
  typedSearchingText: string;
  isLoadingUsers: boolean;
  onTextInput: (text: string) => void;
  onSearchButtonClick: () => void;
}

export const ExplorerHeader: FC<ExplorerHeaderProps> = ({
  typedSearchingText,
  isLoadingUsers,
  onTextInput,
  onSearchButtonClick,
}) => {
  return (
    <>
      <Input
        fluid
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onTextInput(e.target.value)
        }
        className="inputClass"
        placeholder="Enter username"
      />
      <ExpandedButton
        fluid
        onClick={() => {
          onSearchButtonClick();
        }}
        disabled={!typedSearchingText.length || isLoadingUsers}
      >
        Search
      </ExpandedButton>
    </>
  );
};
