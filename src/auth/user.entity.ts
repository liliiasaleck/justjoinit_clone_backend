import { Offer } from 'src/offers/offer.entity';
import { Column, Entity, ObjectIdColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
    public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  
}

export default User;
