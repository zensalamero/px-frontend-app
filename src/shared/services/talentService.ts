import { useMutation, useQuery } from 'react-query';
import { talentDao } from 'shared/dao/talentDao';
import {
  ITalentBiographyResponsePayload,
  ITalentResumeResponsePayload,
  ITalentUpdatePayload,
} from 'shared/interfaces/ITalent';

const { getResume: getResumeDao, getBiography: getBiographyDao, updateTalent: updateTalentDao } = talentDao();
export const talentService = () => {
  const updateTalent = () => {
    return useMutation((payload: ITalentUpdatePayload) => updateTalentDao(payload));
  };
  const getResume = () => {
    return useQuery<ITalentResumeResponsePayload>(['talents/resume'], () => getResumeDao());
  };

  const getBiography = () => {
    return useQuery<ITalentBiographyResponsePayload>(['talents/biography'], () => getBiographyDao());
  };

  return {
    updateTalent,
    getResume,
    getBiography,
  };
};
