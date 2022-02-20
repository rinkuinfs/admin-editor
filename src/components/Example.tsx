import React from 'react';
import Editor from '@atlaskit/editor-core/editor';
import TextArea from '@atlaskit/textarea';
import { EditorActions, EditorContext, WithEditorActions, ToolbarHelp } from '@atlaskit/editor-core';
import {
  getEmojiProvider,
  currentUser,
} from '@atlaskit/util-data-test/get-emoji-provider';
import { mentionResourceProvider } from '@atlaskit/util-data-test/mention-story-data';
import { getMockTaskDecisionResource } from '@atlaskit/util-data-test/task-decision-story-data';
import { storyMediaProviderFactory, fakeMediaProvider } from '@atlaskit/editor-test-helpers/media-provider';
import { EmojiProvider } from '@atlaskit/emoji/resource';
import styled from 'styled-components';
import * as mediaTestHelpers from '@atlaskit/media-test-helpers';

export const mediaProvider = fakeMediaProvider({
  includeUserAuthProvider: false,
});

interface AdfState {
  isValidAdf: boolean;
}

const Wrapper: any = styled.div`
  display: 'flex';
  padding: '10px';
  flex-direction: 'column';
`;

export const providers: any = {
  emojiProvider: getEmojiProvider({
    uploadSupported: false,
    currentUser,
  }) as Promise<EmojiProvider>,
  taskDecisionProvider: Promise.resolve(getMockTaskDecisionResource()),
  mentionProvider: Promise.resolve(mentionResourceProvider),
};

export default class Example extends React.Component<{}, AdfState> {
  
  private editorActions?: EditorActions;
  private adfTextArea?: HTMLTextAreaElement;
  state = {
    isValidAdf: true,
  };
  
  render() {
    console.log(this.props);
    const data = this.props.data;
    console.log(data);

    // const data = {"type":"doc","content":[{"type":"heading","attrs":{"level":2},"content":[{"text":"INTRODUCTION","type":"text"}]},{"type":"paragraph","content":[{"text":"Many wonder about physical health at some point in life. Unfortunately, over the past few years, the Health and Wellness Industry has mystified the concept of health. As if “healthy” people are subspecies of the human race. Everyone is curious to know what these healthy people do, what they eat, how they exercise, what their daily routine is like, what they apply to their skin, etc., etc.","type":"text"}]},{"type":"paragraph","content":[{"text":"By incorporating certain healthy behaviors such as physical activity, healthy eating, minimal alcohol consumption, and psychological interventions can help change a person’s health status.\"","type":"text"}]},{"type":"paragraph","content":[]}],"version":1};

    return (
      <EditorContext>
        <Wrapper>
          <div>
            <WithEditorActions
              render={(actions) => {
                this.editorActions = actions;
                return (
                  <Editor
                    onChange={this.handleEditorChange}
                    appearance="full-page"
                    allowRule={true}
                    allowTextColor={true}
                    allowTables={{
                      allowControls: true,
                    }}
                    allowPanel={true}
                    allowHelpDialog={true}
                    defaultValue={ data }
                    primaryToolbarComponents={[
                      <ToolbarHelp key={1} titlePosition="top" title="Help" />,
                    ]}
                    media={{
                      provider: mediaProvider,
                      allowMediaSingle: true,
                    }}
                    {...providers}
                  />
                );
              }}
            />
          </div>
          <div>
            <h2>ADF</h2>
            <TextArea
               isInvalid={!this.state.isValidAdf}
               ref={(ref: any) => (this.adfTextArea = ref)}
               placeholder='{"version": 1...'
               isMonospaced={true}
               minimumRows={20}
            />
          </div>
        </Wrapper>
      </EditorContext>
    )
  }

  private handleEditorChange = () => {
    this.updateFields();
  };

  private updateFields = () => {
    if (!this.editorActions) {
      return;
    }

    this.editorActions.getValue().then((value) => {
      if (this.adfTextArea) {
        this.adfTextArea.value = JSON.stringify(value, null, 2);
        this.props.handleUpdateContent(JSON.stringify(value, null, 2));
      }
    });
  };
}
