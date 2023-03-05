import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { CreatePlaceDto } from '../dto/create-place.dto';
import { ApiProperty } from '@nestjs/swagger';
@Table
export class Place extends Model<Place, CreatePlaceDto> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty()
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty()
  @Column({ defaultValue: true })
  isActive: boolean;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  shortDescription: string;

  @ApiProperty()
  @Column({ type: DataType.STRING })
  fullDescription: string;

  @ApiProperty()
  @Column({ type: DataType.STRING })
  MO: string;

  @ApiProperty()
  @Column({ type: DataType.STRING })
  subjectOfTheFederation: string;

  @ApiProperty()
  @Column({ allowNull: true })
  significance: string;

  @ApiProperty()
  @Column({ type: DataType.STRING })
  location: string;

  @ApiProperty()
  @Column({ type: DataType.STRING })
  address: string;

  @ApiProperty()
  @Column({ type: DataType.NUMBER })
  OKTMO: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  actionsWithObject: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  сonstructionStartDate: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  constructionEndDate: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  totalFunding: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  financingFromTheFederalBudget: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  financingFromTheFederalBudgetMastered: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  financingFromTheBudgetOfTheSubjectOfTheFederation: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  financingFromTheBudgetOfTheSubjectOfTheFederationMastered: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  financingFromTheBudgetOfTheMunicipality: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  financingFromTheBudgetOfTheMunicipalityMastered: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  fundingFromExtrabudgetarySources: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  fundingFromExtrabudgetarySourcesMastered: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  supervisoryBody: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  addressOfTheSupervisoryBody: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  phoneOfTheSupervisoryBody: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  contactPhoneOfTheObject: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  workingHoursOnWeekdays: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  workingHoursOnSaturaday: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  workingHoursOnSunday: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  area: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  email: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  link: string;

  @ApiProperty()
  @Column({ defaultValue: true, type: DataType.BOOLEAN, allowNull: true })
  inRegistry: boolean;

  @ApiProperty()
  @Column({ type: DataType.STRING })
  typeOfSportsComplex: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  whatCompetitionsAreHeld: string;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.STRING })
  kindsOfSports: string;

  @ApiProperty()
  @Column({ type: DataType.NUMBER })
  objectXCoordinate: number;

  @ApiProperty()
  @Column({ type: DataType.NUMBER })
  objectYCoordinate: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  mapScale: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  centerXCoordinate: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  centerYCoordinate: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  miniXCoordinate: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  miniYCoordinate: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  generalPlan: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  additionalPlans: number;

  @ApiProperty()
  @Column({ allowNull: true, type: DataType.NUMBER })
  rating: number;
}
