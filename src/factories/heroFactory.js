import HeroRepository from "../repositories/heroRepository.js";
import HeroService from "../services/heroService.js";

const generateInstance = ({
    filepath
}) => {
    //hero goes all db connection
    const heroRepository = new HeroRepository({
        file: filepath
    })
    const heroService = new HeroService({
        heroRepository
    })

    return heroService
}

export {
    generateInstance
}
