import React, { FC } from "react";
import { Input } from "semantic-ui-react";
import { ExpandedButton } from "components/styled";

interface ExplorerHeaderProps {
  typedSearchingText: string;
  onTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchButtonClick: () => void;
}

export const ExplorerHeader: FC<ExplorerHeaderProps> = ({
  typedSearchingText,
  onTextInput,
  onSearchButtonClick,
}) => (
  <>
    <Input
      fluid
      onChange={onTextInput}
      className="inputClass"
      placeholder="Enter username"
      value={typedSearchingText}
    />
    <ExpandedButton fluid onClick={onSearchButtonClick}>
      Search
    </ExpandedButton>
  </>
);
