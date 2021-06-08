const BASE_API_URL = 'https://polls.apiblueprint.org';

export default {
  questions: `${BASE_API_URL}/questions`,
  fetchQuestionDetails: questionNo => `${BASE_API_URL}/questions/${questionNo}`,
  saveVote: url => `${BASE_API_URL}${url}`,
};
