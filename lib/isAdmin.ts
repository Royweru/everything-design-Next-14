import { auth } from "@clerk/nextjs/server";


const whiteListed = [
"user_2m32vc6Fdu1berZJKobWTQiZyv2",
];
export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return whiteListed.indexOf(userId) !== -1;
};
