import { PrismaClient } from '@prisma/client'
import { Link } from '/Users/lizl/Documents/GitHub/linktree-assessment/utils/types/types'

const prisma = new PrismaClient()

export class linkFunctions {

  async getAllLinksbyUserId (userId: string): Promise<Link> {
      const link = await prisma.LinkDetails.findMany({
        where: {
        id: userId,
      },
      return new Link
      

      
})

  }
  


}




