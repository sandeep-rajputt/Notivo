const getMailLeftTime = (
  lastEmailSent: Date,
  maxTime: number
): string | null => {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();
  const lastEmailSentTime = lastEmailSent.getTime();
  if (currentTime - lastEmailSentTime < maxTime) {
    const timeLeftInMs = currentTime - lastEmailSentTime;
    console.log(Math.floor((maxTime - timeLeftInMs) / 1000));
    const timeleft =
      timeLeftInMs > maxTime - 60000
        ? `${Math.floor((maxTime - timeLeftInMs) / 1000)} seconds`
        : `${Math.floor((maxTime - timeLeftInMs) / 1000 / 60)} minutes`;
    return timeleft;
  } else {
    return null;
  }
};

export default getMailLeftTime;
