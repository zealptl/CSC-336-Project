import { createUser } from '../UserControllers/createUser';

export const signUpUser = async (req, res) => {
    try {
        await createUser(req, res);

    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: error.message });
    }
  };