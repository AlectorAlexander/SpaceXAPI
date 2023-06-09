import { Op } from "sequelize";
import Launchpads from "../database/models/LaunchpadsModels";

class LaunchpadService {

  public async getAllLaunchpads(): Promise<Launchpads[]> {
    const launchpads = await Launchpads.findAll();
    return launchpads;
  }

  public async getLaunchpadById(id: string): Promise<Launchpads | null> {
    const launchpad = await Launchpads.findByPk(id);
    return launchpad;
  }


  public async getLaunchpadByName(name: string): Promise<Launchpads[] | null> {
    try {
      const launchpads = await Launchpads.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
  
      return launchpads;
    } catch (error) {
      console.error('Error in getLaunchpadByName:', error);
      return null;
    }
  }
  
  public async getLaunchpadByLocality(locality: string): Promise<Launchpads[] | null> {
    try {
      const launchpads = await Launchpads.findAll({
        where: {
          locality: {
            [Op.like]: `%${locality}%`,
          },
        },
      });
  
      return launchpads;
    } catch (error) {
      console.error('Error in getLaunchpadByLocality:', error);
      return null;
    }
  }

  public async getLaunchpadByRegion(region: string): Promise<Launchpads[] | null> {
    try {
      const launchpads = await Launchpads.findAll({
        where: {
          region: {
            [Op.like]: `%${region}%`,
          },
        },
      });
  
      return launchpads;
    } catch (error) {
      console.error('Error in getLaunchpadByRegion:', error);
      return null;
    }
  }


}

export default LaunchpadService;
