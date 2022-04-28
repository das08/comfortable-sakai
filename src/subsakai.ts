import { loadHostName } from "./features/storage/load";

const subSakaiRoot = document.querySelector("#sub-sakai");

/**
 * Update subSakai to latest info
 */
async function updateSubSakai(root: Element) {
    const hostname = await loadHostName();
    // let mergedAssignmentList: Array<Assignment>;
    //
    // const assignmentList = convertArrayToAssignment(await loadFromLocalStorage2(hostname, "CS_AssignmentList"));
    // const quizList = convertArrayToAssignment(await loadFromLocalStorage2(hostname, "CS_QuizList"));
    // const assignmentMemoList = convertArrayToAssignment(await loadFromLocalStorage2(hostname, "CS_MemoList"));
    // const courseIDs = (await loadFromLocalStorage2(hostname, "CS_CourseInfo")) as Array<CourseSiteInfo>;
    // mergedAssignmentList = mergeIntoAssignmentList(assignmentList, quizList);
    // mergedAssignmentList = mergeIntoAssignmentList(mergedAssignmentList, assignmentMemoList);
    // mergedAssignmentList = sortAssignmentList(mergedAssignmentList);

    // FIXME
    // await createMiniSakaiGeneralized(root, mergedAssignmentList, courseIDs, true, (rendered) => {
    //   console.log(rendered);
    //   root.innerHTML = rendered;
    // });
}

function addSubSakaiToPopup(): Element | null {
    if (subSakaiRoot == null) return null;
    return subSakaiRoot;
}

/**
 * Initialize subSakai
 */
async function initSubSakai() {
    const root = addSubSakaiToPopup();
    root && (await updateSubSakai(root));
}

initSubSakai();
