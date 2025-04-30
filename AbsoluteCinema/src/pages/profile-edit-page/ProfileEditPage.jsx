import { Container } from "react-bootstrap"
import CustomNavbar from "../../components/custom-navbar/CustomNavbar"
import ProfileEditForm from "../../components/profile-edit-form/ProfileEditForm"

function ProfileEditPage() {
    return (
        <>
            <CustomNavbar />
            <Container style={{ position: 'relative' }} fluid="xl">
                <ProfileEditForm/>
            </Container>
        </>
    )
}

export default ProfileEditPage
