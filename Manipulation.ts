import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function addABook() {

    const author = await prisma.author.create({data: {
        name: 'God',
        biography: 'In the beginning...'
    }});

  const newBook = await prisma.book.create({data: {
        title: 'The Bible',
        ISBN: 43242353,
        authorId: author.id
  }
  });
  
}

addABook()



//bookId MemberId
async function borrowABook(bookId: number, memberId: number) {

    const storedMemberId = await prisma.member.findUnique({
        where: {
            id: memberId,
        }
    });

    await prisma.book.update({
        where: {
            id: bookId
        },
        data: {
            memberId: memberId
        },
    })
}
