import HeroRepository from "../../../complete-nodejs-webapi-without-frameworks-yt/examples-in-class/web-api/src/repositories/heroRepository.js"
import HeroService from "../services/heroService.js"

const generateInstance = ({
  filePath
}) => {
   // hero goes all db connections
   const heroRepository = new HeroRepository({
       file: filePath
   })
   const heroService = new HeroService({
     heroRepository
   })

   return heroService
}

export {
    generateInstance
}
