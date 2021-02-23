import React from 'react';
import Articles from './ArticlesComponent';
import { render, cleanup, waitFor, act, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mocked } from 'ts-jest/utils';
import { getArticles } from './ArticleService';
import ArticlesList from './ArticlesList';

afterEach(() => {
    cleanup;
    jest.resetAllMocks();
});

jest.mock('./ArticleService.ts');
const mockAxios = mocked(getArticles);

describe('Testing Articles Components', () => {

    it('Renders Articles correctly', async () => {
        await act(async () => {
            const { getByTestId } = render(<Articles />);
            expect(getByTestId('articlesContainer')).toBeInTheDocument();
        })
    })

    it('Render a row article correctly', async () => {
        await act(async () => {
            const { getByText } = render(<ArticlesList />);
            await waitFor(() =>[
                expect(
                  getByText(
                   's'
                  ),
                ).toBeTruthy(),
              ]);
        })
    })
})