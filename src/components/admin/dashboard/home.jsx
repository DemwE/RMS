import Header from "@/components/admin/header";

export default function AdminHome({ user }) {
    return (
        <div>
            <Header user={user} />
        </div>
    );
}