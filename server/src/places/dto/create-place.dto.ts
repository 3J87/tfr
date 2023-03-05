import { IsEmail, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlaceDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  readonly isActive?: boolean;

  @ApiProperty()
  readonly shortDescription?: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly fullDescription: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly MO: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly subjectOfTheFederation: string;

  @ApiProperty()
  readonly significance?: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly location: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly address: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly OKTMO: number;

  @ApiProperty()
  readonly actionsWithObject?: string;

  @ApiProperty()
  readonly сonstructionStartDate?: string;

  @ApiProperty()
  readonly constructionEndDate?: string;

  @ApiProperty()
  readonly totalFunding?: number;

  @ApiProperty()
  readonly financingFromTheFederalBudget?: number;

  @ApiProperty()
  readonly financingFromTheFederalBudgetMastered?: number;

  @ApiProperty()
  readonly financingFromTheBudgetOfTheSubjectOfTheFederation?: number;

  @ApiProperty()
  readonly financingFromTheBudgetOfTheSubjectOfTheFederationMastered?: number;

  @ApiProperty()
  readonly financingFromTheBudgetOfTheMunicipality?: number;

  @ApiProperty()
  readonly financingFromTheBudgetOfTheMunicipalityMastered?: number;

  @ApiProperty()
  readonly fundingFromExtrabudgetarySources?: number;

  @ApiProperty()
  readonly fundingFromExtrabudgetarySourcesMastered?: number;

  @ApiProperty()
  readonly supervisoryBody?: string;

  @ApiProperty()
  readonly addressOfTheSupervisoryBody?: string;

  @ApiProperty()
  readonly phoneOfTheSupervisoryBody?: string;

  @ApiProperty()
  readonly contactPhoneOfTheObject?: string;

  @ApiProperty()
  readonly workingHoursOnWeekdays?: string;

  @ApiProperty()
  readonly workingHoursOnSaturaday?: string;

  @ApiProperty()
  readonly workingHoursOnSunday?: string;

  @ApiProperty()
  readonly area?: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  readonly link?: string;

  @ApiProperty()
  readonly inRegistry?: boolean;

  @ApiProperty()
  readonly typeOfSportsComplex: string;

  @ApiProperty()
  readonly whatCompetitionsAreHeld?: string;

  @ApiProperty()
  readonly kindsOfSports?: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly objectXCoordinate: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly objectYCoordinate: number;

  @ApiProperty()
  readonly mapScale?: number;

  @ApiProperty()
  readonly centerXCoordinate?: number;

  @ApiProperty()
  readonly centerYCoordinate?: number;

  @ApiProperty()
  readonly miniXCoordinate?: number;

  @ApiProperty()
  readonly miniYCoordinate?: number;

  @ApiProperty()
  readonly generalPlan?: number;

  @ApiProperty()
  readonly additionalPlans?: number;

  @ApiProperty()
  readonly rating?: number;
}
