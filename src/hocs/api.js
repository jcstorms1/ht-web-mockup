import moment from "moment";

const http =
  "https://ec2-18-236-96-240.us-west-2.compute.amazonaws.com:80/api/logdata?id=";
const id = "Hatchtrack-Test-001";

export const createQuery = () => {
  //get timestamps 24 hours apart
  let yesterday = moment()
    .subtract(3, "day")
    .toISOString();
  let now = moment().toISOString();
  let query = http + id + "&start=" + yesterday + "&stop=" + now;
  return query;
};
