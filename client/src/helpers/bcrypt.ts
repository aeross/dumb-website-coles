import bcrypt from "bcryptjs";

class BcryptHelper {
    static hash(password: string) {
        return bcrypt.hashSync(password);
    }

    static compare(password: string, hash: string) {
        return bcrypt.compareSync(password, hash);
    }
}

export default BcryptHelper;