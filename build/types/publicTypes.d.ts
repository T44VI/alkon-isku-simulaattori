interface ServerGS {
    public: PublicGS;
    privates: [PrivateGS];
}
interface ClientGS {
    public: PublicGS;
    private: PrivateGS;
}
interface PublicGS {
    room: string;
    game: string;
}
interface PrivateGS {
    uuid: string;
    name: string;
}
