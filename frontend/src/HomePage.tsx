import React from 'react';
import { PrimaryButton } from './Styles';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { useEffect, useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

//const renderQuestion = (question: QuestionData) => <div>{question.title}</div>;

export const HomePage: FC<RouteComponentProps> = ({ history }) => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  useEffect(() => {
    console.log('first rendered');

    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();

    //const questions = await getUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    history.push('/ask');
    console.log('TODO - move to the AskPage');
  };

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
          <PrimaryButton onClick={handleAskQuestionClick}>
            Ask a question
          </PrimaryButton>
        </div>
        {/* <QuestionList data={getUnansweredQuestions()} /> */}
      </div>
      {questionsLoading ? (
        <div
          css={css`
            font-size: 16px;
            font-style: italic;
          `}
        >
          Loading...
        </div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};

// renderItem={renderQuestion}
