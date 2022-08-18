
export interface Position {
    x: number
    y: number
}

export interface Handle {
    id: string
    source: string
    target: string
}

export interface NodeInterface {
    coord: Position                                 // global position coordinate
    handles?: { [key: string]: Handle }              // handle
    data?: any                                      // optional client state
}

export interface NodeCanvasInterface {
    transform: any
    nodes: { [key: string]: NodeInterface }
}