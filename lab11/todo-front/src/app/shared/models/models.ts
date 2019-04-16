export interface ITaskList {
    id: number;
    name: string;
}

export interface ITask {
    id: number;
    name: string;
    created_at: string;
    due_on: string;
    status: string;
}

export interface ITaskDetail {
    id: number;
    name: string;
    status: string;
}
