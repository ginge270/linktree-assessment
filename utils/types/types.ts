export interface User {
    userId: string
    email: String
    accountType: String
}

export interface Link {
    linkTitle: String
    url?: String
    description: String
}

export interface ShowsList extends Link {
    shows: [{
        showlist: String
        showLocation: String
        onSale: Boolean
        soldOut: Boolean
    }]
}

export interface MusicPlayer extends Link {
    musicPlatforms: [{
        platformName: String
        platformUrl: string
        embedUrl: String
    }]


}




