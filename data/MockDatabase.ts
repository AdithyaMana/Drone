export interface Course {
    course_id: string;
    name: string;
    par_time_ms: number;
}

export interface Gate {
    gate_id: string;
    course_id: string;
    sequence_order: number;
    penalty_weight_ms: number;
}

export const MOCK_COURSES: Course[] = [
    { course_id: 'track-1', name: 'NEON ALLEY', par_time_ms: 75000 },
    { course_id: 'track-2', name: 'CYBER CORE', par_time_ms: 58500 },
    { course_id: 'track-3', name: 'VOID RUN', par_time_ms: 150250 },
];

export const MOCK_GATES: Gate[] = [
    // track-1 gates
    { gate_id: 't1-g1', course_id: 'track-1', sequence_order: 1, penalty_weight_ms: 5000 },
    { gate_id: 't1-g2', course_id: 'track-1', sequence_order: 2, penalty_weight_ms: 5000 },
    { gate_id: 't1-g3', course_id: 'track-1', sequence_order: 3, penalty_weight_ms: 5000 },
    { gate_id: 't1-g4', course_id: 'track-1', sequence_order: 4, penalty_weight_ms: 10000 },
    { gate_id: 't1-g5', course_id: 'track-1', sequence_order: 5, penalty_weight_ms: 15000 },

    // track-2 gates
    { gate_id: 't2-g1', course_id: 'track-2', sequence_order: 1, penalty_weight_ms: 5000 },
    { gate_id: 't2-g2', course_id: 'track-2', sequence_order: 2, penalty_weight_ms: 5000 },
    { gate_id: 't2-g3', course_id: 'track-2', sequence_order: 3, penalty_weight_ms: 10000 },
    { gate_id: 't2-g4', course_id: 'track-2', sequence_order: 4, penalty_weight_ms: 10000 },
    { gate_id: 't2-g5', course_id: 'track-2', sequence_order: 5, penalty_weight_ms: 20000 },

    // track-3 gates
    { gate_id: 't3-g1', course_id: 'track-3', sequence_order: 1, penalty_weight_ms: 10000 },
    { gate_id: 't3-g2', course_id: 'track-3', sequence_order: 2, penalty_weight_ms: 10000 },
    { gate_id: 't3-g3', course_id: 'track-3', sequence_order: 3, penalty_weight_ms: 10000 },
    { gate_id: 't3-g4', course_id: 'track-3', sequence_order: 4, penalty_weight_ms: 15000 },
    { gate_id: 't3-g5', course_id: 'track-3', sequence_order: 5, penalty_weight_ms: 25000 },
];
