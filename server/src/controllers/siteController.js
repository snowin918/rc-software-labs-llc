import {
  heroContent,
  valueProps,
  whyRCSoftwareLabs,
  aboutContent,
  services,
  technicalStrengths,
  collaborationModels,
  ethicalCommitment,
  talentNetwork,
  caseStudies,
  insights,
  contactInfo
} from "../utils/siteContent.js";

export const getSiteBlueprint = (_req, res) => {
  res.json({
    hero: heroContent,
    valueProps,
    whyRCSoftwareLabs,
    about: aboutContent,
    services,
    technicalStrengths,
    collaborationModels,
    ethicalCommitment,
    talentNetwork,
    caseStudies,
    insights,
    contactInfo
  });
};

export const getInsights = (_req, res) => {
  res.json(insights);
};

export const getCaseStudies = (_req, res) => {
  res.json(caseStudies);
};
