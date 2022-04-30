import React, { useId } from "react";
import { CurrentTime } from "../constant";
import { MemoEntry } from "../features/entity/memo/types";
import { createDateString, getRemainTimeString } from "../utils";
import { useTranslation, useTranslationArgsDeps } from "./helper";

export default function MemoEntryView(props: {
    memo: MemoEntry;
    isSubset: boolean;
    onCheck: (checked: boolean) => void;
    onDelete: () => void;
}) {
    const dueDateString = createDateString(props.memo.dueTime);
    const timeRemain = getRemainTimeString(props.memo.dueTime - CurrentTime);
    const remainTimeString = useTranslationArgsDeps(
        "remain_time",
        [timeRemain[0], timeRemain[1], timeRemain[2]],
        timeRemain
    );

    const memoBadge = useTranslation("memo");

    const labelId = useId();

    return (
        <>
            {!props.isSubset ? (
                <>
                    <input
                        id={labelId}
                        className="cs-checkbox"
                        type="checkbox"
                        checked={props.memo.hasFinished}
                        onChange={(ev) => props.onCheck(ev.target.checked)}
                    ></input>
                    <label htmlFor={labelId}></label>
                    <p className="cs-assignment-date">{dueDateString}</p>
                </>
            ) : (
                <span className="cs-assignment-date cs-assignmate-date-padding">{dueDateString}</span>
            )}
            <span className="cs-assignment-time-remain">{remainTimeString}</span>

            <p className="cs-assignment-title">
                <span className="cs-badge cs-badge-memo">{memoBadge}</span>
                <span className="cs-del-memo-btn" onClick={() => props.onDelete()}>
                    x
                </span>{" "}
                {/* TODO: del button */}
                {props.memo.title}
            </p>
        </>
    );
}
