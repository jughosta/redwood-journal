export const entries = ({ userId, day } /* , context */) => {
  // NB: The current implementation is not secure!!
  // TODO: retrieve userId from the client context instead of accepting it via params
  // const {identity, user} = context.clientContext;
  // https://docs.netlify.com/functions/functions-and-identity/#access-identity-info-via-clientcontext

  return db.entry.findMany({
    where: {
      userId,
      day,
    },
  })
}

export const entry = ({ id }) => {
  // TODO: check user access rights via context.clientContext

  return db.entry.findOne({
    where: { id },
  })
}

export const createEntry = ({ input }) => {
  return db.entry.create({
    data: input,
  })
}

export const updateEntry = ({ id, input }) => {
  // TODO: check user access rights via context.clientContext

  return db.entry.update({
    data: input,
    where: { id },
  })
}

export const deleteEntry = ({ id }) => {
  // TODO: check user access rights via context.clientContext

  return db.entry.delete({
    where: { id },
  })
}
