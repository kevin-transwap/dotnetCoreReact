import React from 'react';
import { PrimaryButton } from './Styles';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { useEffect, useState } from 'react';

//const renderQuestion = (question: QuestionData) => <div>{question.title}</div>;

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  useEffect(() => {
    console.log('first rendered');
  }, []);
  return (
    <Page>
      <div
        css={css`
          margin: 50px auto 20px auto;
          padding: 30px 20px;
          max-width: 600px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <PageTitle>Unanswered Questions</PageTitle>
          <PrimaryButton>Ask a question</PrimaryButton>
        </div>
        {/* <QuestionList data={getUnansweredQuestions()} /> */}
      </div>
    </Page>
  );
};
// renderItem={renderQuestion}
