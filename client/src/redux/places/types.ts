export type Place = {
  id: number;
  name: string;
  isActive?: boolean;
  shortDescription?: string;
  fullDescription: string;
  MO: string;
  subjectOfTheFederation: string;
  significance?: string;
  location: string;
  address: string;
  OKTMO: number;
  actionsWithObject?: string;
  сonstructionStartDate?: string;
  constructionEndDate?: string;
  totalFunding?: number;
  financingFromTheFederalBudget?: number;
  financingFromTheFederalBudgetMastered?: number;
  financingFromTheBudgetOfTheSubjectOfTheFederation?: number;
  financingFromTheBudgetOfTheSubjectOfTheFederationMastered?: number;
  financingFromTheBudgetOfTheMunicipality?: number;
  financingFromTheBudgetOfTheMunicipalityMastered?: number;
  fundingFromExtrabudgetarySources?: number;
  fundingFromExtrabudgetarySourcesMastered?: number;
  supervisoryBody?: string;
  addressOfTheSupervisoryBody?: string;
  phoneOfTheSupervisoryBody?: string;
  contactPhoneOfTheObject?: string;
  workingHoursOnWeekdays?: string;
  workingHoursOnSaturaday?: string;
  workingHoursOnSunday?: string;
  area?: string;
  email?: string;
  link?: string;
  inRegistry?: boolean;
  typeOfSportsComplex: string;
  whatCompetitionsAreHeld?: string;
  kindsOfSports?: string;
  objectXCoordinate: number;
  objectYCoordinate: number;
  mapScale?: number;
  centerXCoordinate?: number;
  centerYCoordinate?: number;
  miniXCoordinate?: number;
  miniYCoordinate?: number;
  generalPlan?: number;
  additionalPlans?: number;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface PlaceSliceState {
  items: Place[];
  status: Status;
}

export interface updateRatingProps {
  id: number;
  rating: number;
}