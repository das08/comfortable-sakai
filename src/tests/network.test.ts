import { getAssignmentByCourseID } from "../network";
import fs from "fs";
import { Assignment, AssignmentEntry, CourseSiteInfo } from "../model";

describe("testapi()", (): void => {
  beforeEach(() => {
    //@ts-ignore
    fetch.resetMocks();
  });

  test("single assignment", async (): Promise<void> => {
    const jsonObject = JSON.parse(fs.readFileSync("./src/tests/resources/assignment1.json", "utf8"));
    //@ts-ignore
    fetch.mockResponseOnce(JSON.stringify(jsonObject));
    const a = await getAssignmentByCourseID("", "");
    const assignmentEntry = new AssignmentEntry("sample1","Sample Assignment1",1634731200,false, false,false);
    assignmentEntry.assignmentDetail = "--------";
    assignmentEntry.assignmentPage = "/portal/site/";
    const assignment = new Assignment(new CourseSiteInfo("", ""), [assignmentEntry], false);

    expect(a).toEqual(assignment);
  });
});